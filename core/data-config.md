# data-config组件

- 策划配表读取管理组件
- 可基于本地配置文件的方式加载
- 可基于redis数据的方式加载
- 可基于接口抽像自定义数据源加载
- 支持自定义文件格式读取，目前已实现`JSON`格式读取
- 支持缓存热更新
- 可自定义类型检测
- 可根据`go-linq`进行数据集合的条件查询

## Install

### Prerequisites
- GO >= 1.17

### Using go get
```
go get github.com/cherry-game/cherry/components/data-config@latest
```


## Quick Start
```
import cherryDataConfig "github.com/cherry-game/cherry/components/data-config"
```

```
package demo
import (
	"github.com/cherry-game/cherry"
	cherryDataConfig "github.com/cherry-game/cherry/components/data-config"
)

// RegisterComponent 注册struct到data-config
func RegisterComponent() {
	dataConfig := cherryDataConfig.NewComponent()
	dataConfig.Register(
		&DropList,
		&DropOne,
	)

	//data-config组件注册到cherry引擎
	cherry.RegisterComponent(dataConfig)
}

```

## example
- [示例代码跳转](../../examples/test_data_config)