## export default

```
<Bucket.js>
export default Bucket 

<App.js>
import Bucket from "./Bucket.js"
```

## export
```
<Bucket.js>
export const withBucket = () => {
 return 1+1
}

export const bucketList = () => {
 return array
}



->
<App.js>
import {withBucket, bucketList} from "./Bucket"
```

## 결론
불러올 때 중괄호를 사용해서 여러 개를 가져올 수 있느냐 없냐의 차이이다.