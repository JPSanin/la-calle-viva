
const int buttonPin1 = 7;
const int buttonPin2 = 6;
const int buttonPin3 = 8;
const int buttonPin4 = 9;

int buttonState1 = 0;
int buttonState2 = 0;
int buttonState3 = 0;
int buttonState4 = 0;

void setup() {
  pinMode(buttonPin1, INPUT);
  pinMode(buttonPin2, INPUT);
  pinMode(buttonPin3, INPUT);
  pinMode(buttonPin4, INPUT);
  Serial.begin(9600);
}

void loop() {
  buttonState1 = digitalRead(buttonPin1);
  buttonState2 = digitalRead(buttonPin2);
  buttonState3 = digitalRead(buttonPin3);
  buttonState4 = digitalRead(buttonPin4);


  if (buttonState1 == HIGH) {

    Serial.print('1');
    Serial.print(' ');
    Serial.println();
    delay(2000);

  }

  if (buttonState2 == HIGH) {

    Serial.print('2');
    Serial.print(' ');
    Serial.println();
    delay(2000);

  }

  if (buttonState3 == HIGH) {

    Serial.print('3');
    Serial.print(' ');
    Serial.println();
    delay(2000);

  }

  if (buttonState4 == HIGH) {

    Serial.print('4');
    Serial.print(' ');
    Serial.println();
    delay(2000);

  }
}
