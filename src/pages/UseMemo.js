

import { memo} from 'react'
console.log('memo');
function UseMemo() {
  return (
    <h1>Hello World !</h1>
  )
}

export default memo(UseMemo)