export default function(){
  this.transition(
    this.fromRoute('application'),
    this.use('toLeft'),
    this.reverse('toRight'),
    this.debug()
  );
}
