

const withRandomTheme = (WrappedComponent) => {

  function EnhancedComponent(props) {
    const colort = ['red', 'green', 'yellow', 'orange', 'purple','skyblue']
    const random = colort[Math.floor(Math.random()*5)]
    
    const data = localStorage.getItem('username')

    return (data ==='tracom'? <div style={{color: `${random}`}}>
      <WrappedComponent {...props} />
    </div>:'')
  }

  return EnhancedComponent
}

export default withRandomTheme;