dist: 

	rake dist

deploy:

	rm -f ./source/*tmp.* 
	rm -rf $(YOIN_IOS_PATH)/www/*
	cat ./index.html | grep -v DEBUG_ONLY > $(YOIN_IOS_PATH)/www/index.html
	cp -pr ./source $(YOIN_IOS_PATH)/www/

clean: 

	cd $(YOIN_IOS_PATH); \
	xcodebuild -sdk iphonesimulator5.0 clean;
	rm -rf "/tmp/yoinapp/Applications/yoin-ios.app";

#http://cocoamanifest.net/articles/2011/12/running-your-ios-app-in-the-simulator-from-the-command-line.html
build:

	cd $(YOIN_IOS_PATH); \
	xcodebuild -sdk iphonesimulator5.0 \
						 -arch i386 \
						 install DSTROOT="/tmp/yoinapp"

run:

	waxsim /tmp/yoinapp/Applications/yoin-ios.app

deploy-update: dist deploy

start: dist deploy clean build run


pull:

	git checkout master; git pull origin master
	cd app/submodules/yoin-ember; git checkout master; git pull origin master;git checkout master; cd ../../..;\
	cd app/submodules/yoin-views; git checkout master; git pull origin master;git checkout master; cd ../../..;\
	cd app/submodules/yoin-views-iphone; git checkout master; git pull origin master;git checkout master; cd ../../..;\

PORT ?= 8080
less:

	rm -rf tmp/* source/*
	bundle exec rackup -p $(PORT)

log:
	echo $(YOIN_IOS_PATH)
	echo $(EMBER_PROJECTS_PATH)


.PHONY: log deploy-update less pull
