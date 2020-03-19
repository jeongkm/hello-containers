/**
* Copyright 2019 IBM
*
*   Licensed under the Apache License, Version 2.0 (the "License");
*   you may not use this file except in compliance with the License.
*   You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
*   Unless required by applicable law or agreed to in writing, software
*   distributed under the License is distributed on an "AS IS" BASIS,
*   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*   See the License for the specific language governing permissions and
*   limitations under the License.
**/

var express = require('express');

var PORT;
if (process.env.PORT) {
  PORT = process.env.PORT;
} else {
  PORT = 80;
}

var app = express();
app.get('/', function (req, res) {
  res.send('<html><body><h2>Welcome to IBM Cloud DevOps using containers.</h2><h2> IBM Continuous Delivery는 기업에서 바로 사용 가능한 방식의 DevOps를 지원합니다. 앱 배포 태스크를 지원하는 툴 체인을 작성하고 빌드, 테스트, 배치 등의 작업을 자동화하세요!</h2><h2>바로가기 : <a href="https://cloud.ibm.com/catalog/services/continuous-delivery">https://cloud.ibm.com/catalog/services/continuous-delivery</a></h2>');
});

app.listen(PORT);
console.log(' Application Running on port' + PORT);
