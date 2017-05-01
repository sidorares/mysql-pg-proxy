mysql-pg-proxy
==============

[![Greenkeeper badge](https://badges.greenkeeper.io/sidorares/mysql-pg-proxy.svg)](https://greenkeeper.io/)

mysql to postgres proxy server

## Installation

    npm install mysql-pg-proxy

or clone repo & do `npm install`

## Usage

    node proxy.js mysql-listen-port pg-connect-string

## Example

    > node proxy.js 3307 'postgres://user:password@localhost:5432/dbname' &
    > mysql -h 127.0.0.1 -P 3307

    Welcome to the MySQL monitor.  Commands end with ; or \g.
    Your MySQL connection id is 0
    Server version: node.js rocks

    Copyright (c) 2000, 2011, Oracle and/or its affiliates. All rights reserved.

    Oracle is a registered trademark of Oracle Corporation and/or its
    affiliates. Other names may be trademarks of their respective
    owners.

    Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

    mysql> SELECT * FROM pg_catalog.pg_tables limit 5;
    +------------+--------------+------------+------------+------------+----------+-------------+
    | schemaname | tablename    | tableowner | tablespace | hasindexes | hasrules | hastriggers |
    +------------+--------------+------------+------------+------------+----------+-------------+
    | pg_catalog | pg_statistic | locomote   | NULL       | true       | false    | false       |
    | pg_catalog | pg_type      | locomote   | NULL       | true       | false    | false       |
    | pg_catalog | pg_authid    | locomote   | pg_global  | true       | false    | false       |
    | pg_catalog | pg_proc      | locomote   | NULL       | true       | false    | false       |
    | pg_catalog | pg_class     | locomote   | NULL       | true       | false    | false       |
    +------------+--------------+------------+------------+------------+----------+-------------+
    5 rows in set (0.00 sec)


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/sidorares/mysql-pg-proxy/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

