describe 'Core', -> describe 'Ctrls', ->
  describe 'Button', ->
    after -> @reset()
    before ->
      @title true
      @subtitle 'Standard input button.'

      args =
        label:'My Button'
        cssClass: 'my-foo'

      @load 'ctrl-button', args:args, =>
          ctrl = @ctrl()

          # Events.
          ctrl.on 'clicked', (j, e) => console.log '++clicked', e
          # @autorun => console.log 'AUTORUN isOver', ctrl.isOver()


    it 'write', ->
      console.group('Button')
      ctrl = @ctrl()
      console.log ctrl
      console.log ' - isEnabled', ctrl.isEnabled()
      console.log ' - size', ctrl.size()
      console.log ctrl.el()[0]
      console.groupEnd()


    it '`focus`', -> @ctrl().focus()


    describe.section 'State', ->
      it.boolean 'isEnabled', ->
      it.boolean 'labelOnly', ->
      it.radio 'size', [50, 32, 28, 22], ->
      it.radio 'color', [null, 'silver', 'blue', 'green', 'red', 'orange', 'black'], ->
      it.select 'tabIndex', [null, 0, -1, 5], ->


    describe.section 'Label', ->
      it '`null`', -> @ctrl().label(null)
      it '`empty-string`', -> @ctrl().label('')
      it '`spaces`', -> @ctrl().label('  ')
      it '`My Button`', -> @ctrl().label('My Button')
      it '`long`', -> @ctrl().label(@lorem(10))
      it '`HTML`', -> @ctrl().label("<code>Hello</code> there")
      it '`markdown`', -> @ctrl().label('My *simple* `markdown`')

    describe.section 'Hm', ->