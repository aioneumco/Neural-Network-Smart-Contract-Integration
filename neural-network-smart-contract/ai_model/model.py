import tensorflow as tf
from tensorflow.keras import layers, models
import numpy as np

# Load the MNIST dataset (handwritten digits)
(x_train, y_train), (x_test, y_test) = tf.keras.datasets.mnist.load_data()

# Normalize the data to scale between 0 and 1 (from 0-255 to 0-1)
x_train, x_test = x_train / 255.0, x_test / 255.0

# Build the neural network model
model = models.Sequential([
    layers.Flatten(input_shape=(28, 28)),  # Flatten the input image (28x28 pixels)
    layers.Dense(128, activation='relu'),  # Dense layer with 128 neurons and ReLU activation
    layers.Dropout(0.2),                   # Dropout layer to reduce overfitting
    layers.Dense(10, activation='softmax') # Output layer with 10 neurons (one for each digit)
])

# Compile the model with Adam optimizer, sparse categorical cross-entropy loss, and accuracy as the metric
model.compile(optimizer='adam',
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy'])

# Train the model for 5 epochs
model.fit(x_train, y_train, epochs=5)

# Evaluate the model on the test dataset
test_loss, test_acc = model.evaluate(x_test, y_test, verbose=2)
print(f"Test accuracy: {test_acc}")

# Save the trained model to an H5 file
model.save('mnist_model.h5')  # Save the trained model
