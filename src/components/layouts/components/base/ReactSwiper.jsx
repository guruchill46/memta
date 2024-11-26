import { forwardRef } from "react"
import { Box } from "@mui/material"
import { Swiper } from "swiper/react"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"
import "swiper/css/navigation"
import "swiper/css"

const ReactSwiper = forwardRef(
  ({ children, slidesPerView, onBeforeInit, onSlideChange, ...rest }, ref) => {
    return (
      <Box
        component={Swiper}
        ref={ref}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={slidesPerView}
        onBeforeInit={onBeforeInit}
        onSlideChange={onSlideChange}
        width={1}
        {...rest}
      >
        {children}
      </Box>
    )
  }
)

export default ReactSwiper
