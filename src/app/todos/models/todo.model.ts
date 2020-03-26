export class TodoModel {
    public Id: number;
    public Text: string;
    public Completed: boolean;

    constructor( Text: string) {
        this.Id = Math.random()
        this.Text = Text
        this.Completed = false
    }
}
