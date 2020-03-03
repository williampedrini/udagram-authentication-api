IMAGE := williamcustodio/udagram_authentication_api
AWS_CLI_URL := https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip
AWS_EKSCTL_URL := https://github.com/weaveworks/eksctl/releases/download/latest_release/eksctl_linux_amd64.tar.gz

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
	curl "$(AWS_CLI_URL)" -o "awscliv2.zip";
	unzip awscliv2.zip;
	sudo ./aws/install & > /dev/null;

aws-eksctl:
	curl --silent --location "$(AWS_EKSCTL_URL)" | tar xz -C /tmp;
	sudo mv /tmp/eksctl /usr/local/bin;
	eksctl version;
