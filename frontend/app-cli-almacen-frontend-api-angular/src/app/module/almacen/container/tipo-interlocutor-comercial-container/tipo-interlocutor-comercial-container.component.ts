/*
 * @overview        {TipoInterlocutorComercialContainerComponent}
 *
 * @version         2.0
 *
 * @author          Dyson Arley Parra Tilano <dysontilano@gmail.com>
 *
 * @copyright       Dyson Parra
 * @see             github.com/DysonParra
 *
 * History
 * @version 1.0     Implementation done.
 * @version 2.0     Documentation added.
 */
import { Component } from '@angular/core';
import { GenericContainerComponent } from '@app/module/essential/container/generic-container.component';
import { TipoInterlocutorComercialViewModel } from '../../model/tipo-interlocutor-comercial.model';
import { TipoInterlocutorComercialFacade } from '../../facade/tipo-interlocutor-comercial.facade';

/**
 * TODO: Description of {@code TipoInterlocutorComercialContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-tipo-interlocutor-comercial-container',
    templateUrl: './tipo-interlocutor-comercial-container.component.html',
    standalone: false,
    styleUrls: ['./tipo-interlocutor-comercial-container.component.css']
})
export class TipoInterlocutorComercialContainerComponent extends GenericContainerComponent<TipoInterlocutorComercialViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: TipoInterlocutorComercialViewModel,
        entityFacade: TipoInterlocutorComercialFacade) {
        super(entityInstance, entityFacade);
    }

}
