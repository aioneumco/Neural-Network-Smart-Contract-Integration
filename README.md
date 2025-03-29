Installation Guide
In this project, we will set up everything required to run an integrated AI model with a smart contract. We will train the model using TensorFlow, deploy the smart contract with Truffle, and then interact with the model and contract through a web interface using Web3.js.

Step 1: Setting up the AI Environment
Install Python and TensorFlow: First, make sure you have Python 3 installed on your machine. Then, install the TensorFlow library using the requirements.txt file.

Open your terminal, navigate to the ai_model/ folder, and install the dependencies using pip:


cd ai_model
pip install -r requirements.txt
requirements.txt contains all the dependencies for TensorFlow, such as:

tensorflow==2.7.0
numpy==1.21.2
Train the Model:

After installing the dependencies, train the model using the model.py script:

python model.py
After training is complete, the trained model will be saved in the mnist_model.h5 file located in the ai_model/ folder.

Step 2: Setting up the Smart Contract
Install Truffle and Node.js:

Install Truffle, a framework for developing smart contracts using Solidity. First, ensure you have Node.js installed. Then, install Truffle globally using npm:

npm install -g truffle
Set up the Smart Contract:

Go to the smart_contract/ directory and install the smart contract dependencies:

cd smart_contract
npm install
Deploy the Smart Contract:

To deploy the smart contract to the Ethereum network (e.g., Rinkeby or Ganache), you need to configure Truffle with your mnemonic (the recovery phrase for your wallet) and Infura if you're using Rinkeby.

If using Ganache (local network), open Ganache and connect it to Truffle:

truffle migrate --network ganache
If you're using Rinkeby or Infura, ensure your truffle-config.js is set up correctly (include your mnemonic and Infura).

Then, deploy the contract using:

truffle migrate --network rinkeby
This will deploy the contract to the network.

Step 3: Setting up Web3.js Integration
Install Web3.js:

To interact with the smart contract, you'll need Web3.js:

Go to the web3_integration/ folder and install the dependencies with npm:

cd web3_integration
npm install
Set up the Web Interface:

After installing the dependencies, you can open the index.html file in your browser, but first, ensure Metamask or another Ethereum wallet is connected to the correct Ethereum network.

Modify the code in app.js to interact with the smart contract using Web3.js, making sure to include the ABI (Application Binary Interface) and the contract address (which is available after deployment).

Run the Local Server:

To run a local server, you can use lite-server or any other server of your choice to serve the index.html file.

If you're using lite-server, first install it with:

npm install lite-server --save-dev
Then add the following to your package.json:

"scripts": {
  "start": "lite-server"
}
Now, to run the local server:

npm start
Step 4: Running the Project
Ensure you have trained the AI model and saved it as mnist_model.h5.

Make sure the smart contract is successfully deployed using Truffle.

Run index.html on your local server with Web3.js to interact with the smart contract.

Notes:
Make sure Metamask or your Ethereum wallet is connected to the correct network, such as Rinkeby or Ganache.

If you're using Rinkeby or Infura, ensure Truffle is configured properly in truffle-config.js.

Step 5: Building with Docker (Optional)
If you'd like to run the project with Docker, you can build the container using docker-compose:

Make sure you're in the root of the project, and then run:


docker-compose up
The docker-compose.yml will spin up the containers for the AI model, Smart contract, and Web interface.

 you'll be able to run the entire project, connect the AI model to the smart contract, and interact with it through a Web3.js interface.




التنصيب
في هذا المشروع، سنقوم بتثبيت كافة الأدوات اللازمة لتشغيل نموذج الذكاء الاصطناعي المتكامل مع العقد الذكي. سنحتاج إلى بيئة لتدريب النموذج باستخدام TensorFlow، ثم نشر العقد الذكي باستخدام Truffle، وأخيرًا تشغيل واجهة المستخدم باستخدام Web3.js.

الخطوة 1: إعداد بيئة الذكاء الاصطناعي (AI)
تثبيت Python و TensorFlow: أولًا، تأكد من أنك قد قمت بتثبيت Python 3 على جهازك. بعد ذلك، قم بتثبيت مكتبة TensorFlow باستخدام ملف requirements.txt.

قم بفتح الطرفية وانتقل إلى مجلد ai_model/ ثم قم بتثبيت المتطلبات عبر pip:


cd ai_model
pip install -r requirements.txt

requirements.txt
يجب ان بحتوي على جميع المتطلبات الخاصة بـ TensorFlow،  


tensorflow==2.7.0
numpy==1.21.2
تدريب النموذج:

بعد تثبيت المتطلبات، قم بتدريب النموذج باستخدام السكربت model.py:


python model.py
بعد اكتمال التدريب، سيتم حفظ النموذج المدرب في ملف mnist_model.h5 في مجلد ai_model/.

الخطوة 2: إعداد العقد الذكي (Smart Contract)
تثبيت Truffle و Node.js:

يجب تثبيت Truffle، وهو إطار عمل لتطوير عقود ذكية باستخدام Solidity. أولًا، تأكد من أن Node.js مثبت على جهازك. ثم قم بتثبيت Truffle باستخدام npm:



npm install -g truffle
إعداد العقد الذكي:

انتقل إلى مجلد smart_contract/، ثم قم بتثبيت المتطلبات الخاصة بالعقد الذكي:



cd smart_contract
npm install
نشر العقد الذكي:

لنشر العقد الذكي على شبكة Ethereum (مثل Rinkeby أو Ganache)، ستحتاج إلى تكوين Truffle باستخدام truffle-config.js، حيث يجب عليك إضافة بيانات مثل mnemonic (عبارة الاستعادة لمحفظتك) و Infura إذا كنت تستخدم شبكة Rinkeby.

إذا كنت تستخدم Ganache (شبكة محلية)، افتح Ganache واتصل بـ Truffle:


truffle migrate --network ganache
إذا كنت تستخدم Rinkeby أو Infura، تأكد من إعداد تكوين truffle-config.js بشكل صحيح (تأكد من إضافة mnemonic و Infura).

ثم استخدم:



truffle migrate --network rinkeby
هذا سيتعامل مع نشر العقد على الشبكة.

الخطوة 3: إعداد واجهة Web3.js
تثبيت Web3.js:

للاتصال بالعقد الذكي، يجب تثبيت Web3.js:

انتقل إلى مجلد web3_integration/ وثبت الحزم باستخدام npm:


cd web3_integration
npm install
تشغيل واجهة المستخدم:

بعد تثبيت الحزم، يمكنك فتح صفحة index.html في المتصفح الخاص بك، ولكن تأكد أولاً من أن Metamask أو محفظة أخرى متصلة بشبكة Ethereum.

قم بتعديل الكود في app.js ليتصل بالعقد الذكي باستخدام Web3.js، وتأكد من إضافة ABI (واجهة العقد الذكي) والعنوان الفعلي للعقد الذكي (الذي تم نشره في الخطوة السابقة).

تشغيل الخادم المحلي:

لتشغيل تطبيق الويب المحلي، يمكنك استخدام lite-server أو أي خادم آخر من اختيارك لتشغيل index.html:

إذا كنت تستخدم lite-server، فقم بتثبيته باستخدام:



npm install lite-server --save-dev
ثم أضف في package.json:



"scripts": {
  "start": "lite-server"
}
لتشغيل الخادم المحلي:


npm start
الخطوة 4: تشغيل المشروع بالكامل
تأكد من أنك قمت بتدريب النموذج وتخزينه في mnist_model.h5.

تأكد من نشر العقد الذكي بنجاح باستخدام Truffle.

قم بتشغيل index.html على الخادم المحلي باستخدام Web3.js لتتمكن من التفاعل مع العقد الذكي.

ملاحظه:
تأكد من أن Metamask أو محفظتك الأخرى متصلة بالشبكة الصحيحة مثل Rinkeby أو Ganache.

تأكد من تكوين Truffle بشكل صحيح إذا كنت تستخدم شبكة Rinkeby أو Infura.

الخطوة 5: بناء Docker (اختياري)
إذا كنت ترغب في استخدام Docker لتشغيل المشروع، يمكنك بناء الحاوية باستخدام docker-compose:

تأكد من أنك في الجذر الخاص بالمشروع، ثم قم بتشغيل:


docker-compose up
docker-compose.yml ستقوم بتشغيل الحاويات الخاصة بـ AI model و Smart contract و Web interface.

الان يمكنك تشغيل المشروع بالكامل وربط نموذج الذكاء الاصطناعي مع العقد الذكي والتفاعل مع واجهة المستخدم عبر Web3.js.
