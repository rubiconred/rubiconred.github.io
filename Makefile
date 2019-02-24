STAGE?=dev

build:
	jekyll build

deploy:
	aws --profile rift s3 sync _site/oracle/cloud/ s3://rift-mvp-landing-$(STAGE)/oracle/cloud/
