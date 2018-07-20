import { AddQuestionModule } from './add-question.module';

describe('AddQuestionModule', () => {
  let addQuestionModule: AddQuestionModule;

  beforeEach(() => {
    addQuestionModule = new AddQuestionModule();
  });

  it('should create an instance', () => {
    expect(addQuestionModule).toBeTruthy();
  });
});
