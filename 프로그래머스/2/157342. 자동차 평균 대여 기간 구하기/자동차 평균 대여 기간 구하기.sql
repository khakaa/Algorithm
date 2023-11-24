-- 코드를 입력하세요
SELECT CAR_ID, ROUND(AVG(DATEDIFF(end_DATE, start_date)+1), 1) AVERAGE_DURATION
FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY
GROUP BY CAR_ID
HAVING avg(DATEDIFF(end_DATE, start_date)+1) >= 7
ORDER BY AVERAGE_DURATION DESC, CAR_ID DESC