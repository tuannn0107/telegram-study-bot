@echo ********** start build application **********
@echo start build angular app
cd client
ng build

@echo finish build angular app
cd ../

if exist dist/assets xcopy "client/dist/assets" "src/main/resources/assets" /s/h/e/k/f/c
