import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import { matMenu, matClose, matSearch, matPeople, matPhone, matImportContacts, matChat } from '@ng-icons/material-icons/baseline'
import { tablerHome, tablerAntennaBars5, tablerBox } from '@ng-icons/tabler-icons'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIconComponent],
  providers: [provideIcons({ 
    matMenu, matClose, matSearch, matPeople, matPhone, matImportContacts, matChat, tablerHome, tablerAntennaBars5, tablerBox 
  })],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  @ViewChild('inputSearch') inputSearchRef!: ElementRef<HTMLInputElement>

  menuHendle: boolean = false;
  iconMenu:string = "matMenu"

  hendleMenu() {
    this.menuHendle = ! this.menuHendle
    this.menuHendle ? this.iconMenu = "matClose" : this.iconMenu = "matMenu"
  }

  enableInput() {
    this.inputSearchRef.nativeElement.focus()
  }

  onSubmit(event: SubmitEvent) {
    event.preventDefault()

    const datasForm = new FormData(event.target as HTMLFormElement)
    const textSearch = datasForm.get('search')

    alert(textSearch)
    this.inputSearchRef.nativeElement.value = ''
    this.inputSearchRef.nativeElement.focus()
  }
}
