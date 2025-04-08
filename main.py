import serial
import time

# Setup serial connection
arduino = serial.Serial(port='COM3', baudrate=9600, timeout=1)  # Replace COM3 with your port

def sort_color(color):
    if color == 'Red':
        print("Sorting RED product to Bin A")
    elif color == 'Green':
        print("Sorting GREEN product to Bin B")
    elif color == 'Blue':
        print("Sorting BLUE product to Bin C")
    else:
        print("Unknown color - No action")

def main():
    time.sleep(2)  # Allow Arduino to initialize
    print("Color Sorting Started...")

    try:
        while True:
            if arduino.in_waiting > 0:
                color = arduino.readline().decode('utf-8').strip()
                sort_color(color)
    except KeyboardInterrupt:
        print("Sorting Stopped.")

