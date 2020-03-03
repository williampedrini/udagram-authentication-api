IMAGE := williamcustodio/udagram_authentication_api

build:
	npm run build

image:
	docker build -t $(IMAGE) .

push-image:
	docker push $(IMAGE)

aws-credentials:
	printf "[default]\naws_access_key_id=${AWS_ACCESS_KEY_ID}\naws_secret_access_key=${AWS_SECRET_ACCESS_KEY}\nregion=${AWS_REGION}\n" >> ~/.aws/credentials

aws-check:
	aws --version;
