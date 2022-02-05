install:
	npm ci

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-culc:
	node bin/brain-culc.js

publish:
	npm publish --dry-run

lint:
	npx eslint .