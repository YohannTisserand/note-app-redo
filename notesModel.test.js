import NotesModel from './notesModel.js';

const notes = new NotesModel();

describe('notes model class', () => {
  it('should starts empty', () => {
    expect(notes.getNotes()).toEqual([]);
  });

  it('adds notes', () => {
    notes.addNotes('Buy shoes');
    notes.addNotes('Buy Flowers');
    expect(notes.getNotes().length).toEqual(2);
  });

  it('resets the notes', () => {
    notes.addNotes('Buy shoes');
    notes.reset();
    expect(notes.getNotes()).toEqual([]);
  });

  it('shoud set notes to an array', () => {
    notes.setNotes(['buy shoes', 'buy flowers']);
    expect(notes.getNotes()).toEqual(['buy shoes', 'buy flowers']);
  });
});
