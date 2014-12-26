# describe and beforeAll are part of practicalmeteor:munit


# we can have stubs and spies!!
# https://atmospherejs.com/practicalmeteor/munit

# sipes execute the original function, stubs don't

describe 'Teams', ->

  # beforeAll and beforeEach are possible,
  # same for afterAll and afterEach
  beforeAll ->
    # Let's do 'cleanup' beforeEach too, in case another suite didn't clean up properly
    spies.restoreAll
    stubs.restoreAll

  beforeEach ->
    spies.create('log', console, 'log')

  it 'does something here', ->
    logStr = "wow"
    console.log logStr
    expect(true).to.equal(true)
    expect(spies.log).to.have.been.calledWith(logStr)

  ###
  it 'can access teamMembership', ->
    console.log teamMembership
  ###
  
  afterEach ->
    spies.restoreAll

  afterAll ->
    spies.restoreAll
    stubs.restoreAll


  describe 'nested describe', ->
    beforeAll ->
      console.log "hi"

    it 'exists', ->
      expect(true).to.equal(true)