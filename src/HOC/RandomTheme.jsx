

const randomTheme = (WrappedComponent,color) => {

  function EnhancedComponent(props) {

    const data = localStorage.getItem('username')

    return (data ==='tracom'? <div style={{color: `${color}`}}>
      <WrappedComponent {...props} />
    </div>:'')
  }

  return EnhancedComponent
}

export default randomTheme;