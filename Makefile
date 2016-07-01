UGLIFYJS = ./node_modules/.bin/uglifyjs
KARMA = ./node_modules/.bin/karma

default: clean dist/ruphoner.js dist/ruphoner.min.js

clean:
	@echo "Cleaning dist…"
	@rm ./dist/*

dist/ruphoner.js: src/ruphoner.js
	@echo "Generating file…"
	@cp $^ $@

dist/ruphoner.min.js: src/ruphoner.js
	@echo "Minifying…"
	@$(UGLIFYJS) $^ -o $@ --compress --mangle

test:
	@echo "Running tests…"
	$(KARMA) start --single-run

testing:
	@echo "Testing…"
	$(KARMA) start

.PHONY: default clean test testing

