Documentation for Modern Dashboard

Title
This is Modern Era Dashboard equipped with latest features built with Reactjs and Material UI

Tools Used:
Material UI for icons , styling and  fast paced UI development
Nivo charts for adding attractive bars and charts 
React proSidebar for adding Sidebar instead for  building everything from scratch

Features added 
Dark-Mode/Light Mode
Collapsing Sidebar
Working Side bar Menu
Scrolling Recent Orders and Feedback

Components and reference i took in development

src---> components , data , scene

components--> contains resuable components like Bar chart, Header, StatBoxthat are used in other parts of page
data--> contains dummy data for UI which will usually be the data of REST API
scenes--> contains folders bar, dashboard , global, notes, shop, wallet

bar--> contains bar chart 
dashboard--> it is main component that act as parent to other components and make the whole UI in dashboard section
global--> it contains sidebar(leftbar) and Navbar(Topbar)
notes-->  it is Recent orders section of dashboard contains notes of order delivered pending and cancelled
shop-->  it contains feedback section from customers that has come  to the restaurant or shop
wallet--> it contains other menus and popular dishes options