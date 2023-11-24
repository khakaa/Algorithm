-- 코드를 입력하세요
SELECT DISTINCT(A.CAR_ID)
FROM CAR_RENTAL_COMPANY_CAR A JOIN CAR_RENTAL_COMPANY_RENTAL_HISTORY B ON A.CAR_ID = B.CAR_ID
WHERE CAR_TYPE = '세단' AND DATE_FORMAT(B.START_DATE, '%Y-%m') = '2022-10'
ORDER BY A.CAR_ID desc;