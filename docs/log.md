- clearing errors between modals required clearing them every time the props changed and checking that errors exist
```js
componentWillReceiveProps(newProps){
  if (this.props !== newProps && this.props.errors.length > 0) {
    this.props.clearErrors();
  }
}
```

- decided to imitate search with a regions show page

- ajax calls to google maps were taking longer than component rendering so you'd see the map of the region before

- couldn't render separate errors on forms on same page; reset state to have an errors key for booking and for reviews 
```js
bookings {
  bookings:
  errors:
}
```
