dev:
	fastapi dev src/main.py --host=0.0.0.0

prod:
	fastapi run src/main.py --host=0.0.0.0

venv:
	python3 -m venv venv

reset: clean upgrade

clean:
	pip uninstall -y -r <(pip freeze)

outdated:
	pip list --outdated

upgrade:
	pip install --upgrade --upgrade-strategy eager -r requirements.txt

reinstall:
	pip uninstall -y -r <(pip freeze)
	pip install -r requirements.txt

lint: autopep8 pycodestyle pylint

autopep8:
	autopep8 -i -r src --global-config setup.cfg

pycodestyle:
	pycodestyle src

pylint:
	pylint --recursive=y src
