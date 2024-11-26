import paths from "./paths"

const sitemap = [
  {
    id: 1,
    subheader: "Dashboard",
    path: '/sheet/lay',
    icon: "ic:round-home",
    active: true
  },
  {
    id: 2,
    subheader: "NFT Marketplace",
    path: "#!",
    icon: "ic:outline-shopping-cart"
  },
  {
    id: 3,
    subheader: "Tables",
    path: "#!",
    icon: "ic:round-bar-chart"
  },
  {
    id: 4,
    subheader: "Kanban",
    path: "#!",
    icon: "ic:round-dashboard"
  },
  {
    id: 5,
    subheader: "Profile",
    path: "#!",
    icon: "ic:baseline-person"
  },
  {
    id: 6,
    subheader: "Sign In",
    path: paths.signin,
    icon: "ic:round-lock",
    active: true
  },
  {
    id: 7,
    subheader: "Sign Up",
    path: paths.signup,
    icon: "ic:baseline-person-add-alt-1",
    active: true
  }
]

export default sitemap
