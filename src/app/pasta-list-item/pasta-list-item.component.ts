import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Pastas} from '../models/pastas.model';
import {PastaService} from '../pasta.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-pasta-list-item',
  templateUrl: './pasta-list-item.component.html',
  styleUrls: ['./pasta-list-item.component.scss']
})

export class PastaListItemComponent implements OnInit, OnDestroy {
  pasta: Pastas;
  @Output() deletes = new EventEmitter<Pastas>();

  private readonly destroy$ = new Subject();

  constructor(private route: ActivatedRoute,
              private pastaService: PastaService,
              private location: Location) {
  }

  ngOnInit() {
    this.getPasta();
  }

  getPasta(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pastaService.getPasta(id)
      .subscribe(pasta => this.pasta = pasta);
  }

  delete(pasta: Pastas, event: Event) {
    this.deletes.emit(this.pasta);
    event.stopPropagation();
  }

  goBack(): void {
    this.location.back();
  }

  editPastaAvailability(): void {
    this.pastaService.editPasta(this.pasta);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
