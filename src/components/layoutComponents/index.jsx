export const LayoutComponents = (props) => {
  return (
    <div className="h-screen w-screen bg-[#111] font-montserrat">
      <div className="container max-w-7xl mx-auto">
        <div className="container-login w-full min-h-screen flex flex-wrap items-center justify-center p-4">
          <div className="warp-login w-[390px] bg-gray-600 rounded-xl overflow-hidden pt-20 pb-8 px-14 shadow">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  )
}
