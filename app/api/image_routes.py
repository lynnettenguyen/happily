from flask import Blueprint, request, jsonify
from flask_login import current_user, login_required
from .auth_routes import validation_errors_to_error_messages
from app.models import db, Image
from app.forms import ImageForm
from app.awsS3 import (
    upload_file_to_s3, allowed_file, get_unique_filename)


image_routes = Blueprint("images", __name__)


@image_routes.route("", methods=["POST"])
@login_required
def upload_image():
    if "image" not in request.files:
        return {"errors": "At least one image required"}, 400

    # print(request.files) # ImmutableMultiDict([('image', <FileStorage: 'chopper.png' ('image/png')>)])

    image = request.files["image"]
    # <class 'werkzeug.datastructures.FileStorage'>

    if not allowed_file(image.filename):
        return {"errors": "Image is not a permitted file type (file type must be .gif, .jpeg, .jpg, .png, .svg, .tiff, .webp"}, 400

    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)

    if "url" not in upload:
        # if the dictionary doesn't have a url key, there was an error when we tried to upload
        return upload, 400

    url = upload["url"]

    form=ImageForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        new_image = Image(
            user_id=current_user.id,
            product_id=form.data['product_id'],
            url=url)

        db.session.add(new_image)
        db.session.commit()

        # return {"url": url}
        return jsonify(new_image.to_dict())

    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 400
