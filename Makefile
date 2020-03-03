IMAGE := williamcustodio/udagram_authentication_api

build:
	npm run build

image:
	docker build -t $(IMAGE) .

push-image:
	docker push $(IMAGE)

aws-credentials:
	mkdir ~/.aws
	echo "[default]\naws_access_key_id=${AWS_ACCESS_KEY_ID}\naws_secret_access_key=${AWS_SECRET_ACCESS_KEY}\nregion=${AWS_REGION}\n" >> ~/.aws/credentials

aws-client:
	curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip";
	unzip awscliv2.zip;
	sudo ./aws/install;

aws-eksctl:
	curl --silent --location "https://github.com/weaveworks/eksctl/releases/download/latest_release/eksctl_linux_amd64.tar.gz" | tar xz -C /tmp;
	sudo mv /tmp/eksctl /usr/local/bin;
	eksctl version;
