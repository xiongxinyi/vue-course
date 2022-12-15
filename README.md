连接不上Github的解决办法，修改host文件，文件底部添加：

20.205.243.166 github.com
243.185.187.39 gist.github.com
173.234.53.168 github.global.ssl.fastly.net
185.199.109.153 assets-cdn.github.com
185.199.110.133 raw.githubusercontent.com
185.199.108.133 gist.githubusercontent.com
185.199.110.133 cloud.githubusercontent.com
185.199.110.133 camo.githubusercontent.com
185.199.108.133 avatars.githubusercontent.com

一.hosts文件位置：C:\Windows\System32\drivers\etc
二.修改完映射文件，打开cmd输入ipconfig/flushdns刷新dns缓存
三.关闭代理的自动检测设置
