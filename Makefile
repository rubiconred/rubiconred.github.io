STAGE?=dev
PROFILE=rift

ifeq ($(STAGE),prod)
	DISTRIBUTION_ID=E26JU84320LRP
else ifeq ($(STAGE),uat)
	DISTRIBUTION_ID=TODO
else
	DISTRIBUTION_ID=ECHXGQMYNOQF7
endif

clean:
	jekyll clean

build:
	jekyll build

deploy:
	aws --profile rift s3 sync _site/oracle/cloud/ s3://rift-mvp-landing-$(STAGE)/oracle/cloud/

invalidate:
	ID=`aws cloudfront --profile $(PROFILE) create-invalidation --distribution-id $(DISTRIBUTION_ID) --paths "/*" | jq -r .Invalidation.Id` && \
	aws cloudfront --profile $(PROFILE) wait invalidation-completed --distribution-id $(DISTRIBUTION_ID) --id $$ID

redeploy: clean build deploy invalidate
