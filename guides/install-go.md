# 安装Go


## 任选一种安装方式
- 官方安装包 https://golang.google.cn/dl/
- 国内镜像包 https://studygolang.com/dl
- brew安装  `brew install go`
- Go多版本管理工具 https://github.com/voidint/g

## 设置代理
- 在命令行输入 `go env -w GOPROXY=https://goproxy.cn,direct`

> 建议安装1.18+以上的版本 \
> \
> 输入命令 `go version` 确认是否安装成功 \
> \
> 输入命令 `go env` 查看环境参数