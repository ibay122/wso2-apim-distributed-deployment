# WSO2 APIM 4.0.0 Distributed Deployment
Fresh created, persiapan untuk ujian apim
## Persiapan
Download dan install bahan-bahan berikut ini:

- Install java versi 8 atau 11 dan setting juga JAVA_HOME
- MySQL
- API Manager di [website WSO2](https://wso2.com/api-management/). Pada repo ini digunakan versi 4.0.0.
- Connector JDBC MySQL di [sini](https://dev.mysql.com/downloads/connector/j/). Download yang platform independent. Pada repo ini digunakan versi 8.0.31
## Eksekusi
Langkah-langkah berasal dari [dokumentasi apim](https://apim.docs.wso2.com/en/latest/install-and-setup/setup/distributed-deployment/deploying-wso2-api-m-in-a-distributed-setup-with-tm-separated/#configure-the-gateway-nodes) dan [website ini](https://binodmx.medium.com/how-to-deploy-wso2-api-manager-4-0-0-on-localhost-as-a-distributed-setup-ee0219f0743f).

Hal yang harus diperhatikan:
- Karena di ujian nanti ada 3 profile (gateway, control plane, dan traffic manager) maka buat 3 copy folder apim
- Ganti semua hostname menjadi localhost, karena menjalankan di local
- Untuk koneksi:
```xml
[database.apim_db]
type = "mysql"
url = "jdbc:mysql://localhost:3306/namadatabaseamdisini?useSSL=false"
username = "root"
password = "root"
driver = "com.mysql.cj.jdbc.Driver"  # tambah ini kalau pakai mysql 8.xx

[database.shared_db]
type = "mysql"
url = "jdbc:mysql://localhost:3306/namadatabaseshareddisini?useSSL=false"
username = "root"
password = "root"
driver = "com.mysql.cj.jdbc.Driver" # tambah ini kalau pakai mysql 8.xx
```
- Urutan membuka: control plane > gateway > traffic manager
- Tambahkan argument -DportOffset=1 ketika akan menjalankan gateway. Dan untuk traffic manager tambahkan argument -DportOffset=2