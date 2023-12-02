import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'lib-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  public svgIcon!: any;

  constructor (
    private _httpClient: HttpClient,
    private _sanitizer: DomSanitizer
  ) {
    // intencional
  }

  ngOnInit(): void {
    this._importIcon();
  }

  private _importIcon(): void {
    this._httpClient.get('/assets/icons/comment-xmark.svg', { responseType: 'text' })
      .subscribe(value => {
        this.svgIcon = this._sanitizer.bypassSecurityTrustHtml(value);
      })
  }

}
