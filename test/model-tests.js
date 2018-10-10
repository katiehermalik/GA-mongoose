const expect = require('chai').expect;
const Vampire = require('../vampire_app/models/vampire');

describe('Vampire schema', function() {
    it('should work as expected with good inputs', function(done){
        const dracula = new Vampire({
            name: 'Dracula',
            dob: new Date(937, 0, 24, 13, 0),
            hair_color: 'brown',
            eye_color: 'blue',
            loves: ['Winona Ryder', 'top hats', 'fancy cloaks', 'handlebar mustaches'],
            location: 'Transylvania, Romania',
            gender: 'm',
            victims: 1987
        });
        dracula.validate(function(err){
            expect(err).to.not.exist;
            expect(dracula.name).to.eq('Dracula');
            expect(dracula.hair_color).to.eq('brown');
            expect(dracula.eye_color).to.eq('blue');
            expect(dracula.loves[0]).to.eq('Winona Ryder');
            expect(dracula.loves[3]).to.eq('handlebar mustaches');
            expect(dracula.location).to.eq('Transylvania, Romania');
            expect(dracula.gender).to.eq('m');
            expect(dracula.victims).to.eq(1987);
            done();
        })
    })
    it('should be invalid if name is empty', function(done) {
        const alucard = new Vampire();
        alucard.validate(function(err) {
            expect(err.errors.name).to.exist;
            done();
        });
    });
    it('should be invalid if victims are less than zero', function(done){
        const pacifist = new Vampire({
            name: 'Dracula',
            dob: new Date(937, 0, 24, 13, 0),
            hair_color: 'brown',
            eye_color: 'blue',
            loves: ['Winona Ryder', 'top hats', 'fancy cloaks', 'handlebar mustaches'],
            location: 'Transylvania, Romania',
            gender: 'm',
            victims: -1
        });
        pacifist.validate(function(err){
            expect(err.errors.victims).to.exist;
            done();
        })
        
    });
    it("should have a default hair color of blonde", function(done){
        const blondie = new Vampire({
            name: "blondie"
        });
        expect(blondie.hair_color).to.be.eq('blonde')
        done();
    })
    it("should only accept a string for a name", function(done){
        const uncool = new Vampire({
            name: {cool: false}
        });
        uncool.validate(function(err){
            expect(err.errors.name).to.exist;
            expect(err.errors.name.kind).to.eq('String');
            done()
        })
    })
    it("should only accept a date for dob", function(done){
        const eight = new Vampire({
            dob: "eight"
        });
        eight.validate(function(err){
            expect(err.errors.dob).to.exist;
            expect(err.errors.dob.kind).to.eq('Date');
            done()
        })
    })
    it("should only accept a string for eye_color", function(done){
        const uncool = new Vampire({
            eye_color: {cool: false}
        });
        uncool.validate(function(err){
            expect(err.errors.eye_color).to.exist;
            expect(err.errors.eye_color.kind).to.eq('String');
            done()
        })
    })
    it("should only accept a string for a hair_color", function(done){
        const uncool = new Vampire({
            hair_color: {cool: false}
        });
        uncool.validate(function(err){
            expect(err.errors.hair_color).to.exist;
            expect(err.errors.hair_color.kind).to.eq('String');
            done()
        })
    })
    it("should only accept a string for a location", function(done){
        const uncool = new Vampire({
            location: {cool: false}
        });
        uncool.validate(function(err){
            expect(err.errors.location).to.exist;
            expect(err.errors.location.kind).to.eq('String');
            done()
        })
    })
    it("should only accept a string for a gender", function(done){
        const uncool = new Vampire({
            gender: {cool: false}
        });
        uncool.validate(function(err){
            expect(err.errors.gender).to.exist;
            expect(err.errors.gender.kind).to.eq('String');
            done()
        })
    })
    it("should only accept a number for victims", function(done){
        const pacifist = new Vampire({
            victims: "I abhor violence"
        })
        pacifist.validate(function(err){
            expect(err.errors.victims).to.exist;
            expect(err.errors.victims.kind).to.eq('Number');
            done();
        })
    })
    it("should only accept strings for things they love", function(done){
        const uncool = new Vampire({
            loves: [{cool: false}, "breaking stuff"]
        });
        uncool.validate(function(err){
            expect(err.errors.loves).to.exist;
            done()
        })
    })
});