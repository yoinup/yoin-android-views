
pull:

	git checkout master; git pull origin master
	cd app/submodules/yoin-ember; git checkout master; git pull origin master;git checkout master; cd ../../..;\
	cd app/submodules/yoin-views; git checkout master; git pull origin master;git checkout master; cd ../../..;\
	cd app/submodules/yoin-views-android; git checkout master; git pull origin master;git checkout master; cd ../../..;\
	cd app/submodules/yoin-views-iphone; git checkout master; git pull origin master;git checkout master; cd ../../..;\

PORT ?= 9696
less:

	rm -rf tmp/* source/*
	bundle exec rackup -p $(PORT)



.PHONY: less pull
