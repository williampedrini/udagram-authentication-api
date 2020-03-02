IMAGE := williamcustodio/udagram_authentication_api

build:
	npm run build

image:
	docker build -t $(IMAGE) .

push-image:
	docker push $(IMAGE)
