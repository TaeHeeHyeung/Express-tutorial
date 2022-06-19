# Express-tutorial

RestFul 

REST API 빠른 팁 (https://www.restapitutorial.com/lessons/restquicktips.html)  

식별자를 포함한 리소스이름을 사용하기보다 쿼리스트링을 사용하는게 더 좋다.   
좋은 예: /users/12345  
나쁜 예: /api?type=user&id=23  

/를 사용한 계층화로 데이터 구조를 암시할 수있다.  

명사를 사용하고 동사를 피해라, 세그먼트에 복수형을 사용해라(s)  
추천: /customers/33245/orders/8769/lineitems/1  
비 추천: /customer/33245/order/8769/lineitem/1  

소문자를 사용하고 밑줄 또는 하이푼으로 단어를 구분해라, 단어는 짧은게 좋다.  


RESTful 서비스에 HTTP 메서드 사용 (https://www.restapitutorial.com/lessons/httpmethods.html)  

HTTP 동사는 "균일한 인터페이스" 제약의 주요 부분을 구성하고 명사 기반 리소스에 대응하는 작업을 제공합니다. 기본 또는 가장 일반적으로 사용되는 HTTP 동사(또는 적절하게 호출되는 메서드)는 POST, GET, PUT, PATCH 및 DELETE입니다. 이들은 각각 생성, 읽기, 업데이트 및 삭제(또는 CRUD) 작업에 해당합니다. 다른 동사들도 많이 있지만 덜 자주 사용됩니다. 빈도가 낮은 방법 중에서 OPTIONS와 HEAD가 다른 방법보다 더 자주 사용됩니다.  

POST: 데이터 생성 (Create) =>201  
GET : 데이터 조회 (Read) => 200  
PUT: 데이터 수정 (Update) => 200  
DELETE: 데이터 삭제 (Delete) => 200  
PATCH: 데이터 편집, 수정(Update, Modify) => 200  

POST http://www.example.com/customers  
POST http://www.example.com/customers/12345/orders  

GET http://www.example.com/customers/12345  
GET http://www.example.com/customers/12345/orders  
GET http://www.example.com/buckets/sample  

PUT http://www.example.com/customers/12345  
PUT http://www.example.com/customers/12345/orders/98765  
PUT http://www.example.com/buckets/secret_stuff  

PATCH http://www.example.com/customers/12345  
PATCH http://www.example.com/customers/12345/orders/98765  
PATCH http://www.example.com/buckets/secret_stuff  

DELETE http://www.example.com/customers/12345  
DELETE http://www.example.com/customers/12345/orders  
DELETE http://www.example.com/bucket/sample  
