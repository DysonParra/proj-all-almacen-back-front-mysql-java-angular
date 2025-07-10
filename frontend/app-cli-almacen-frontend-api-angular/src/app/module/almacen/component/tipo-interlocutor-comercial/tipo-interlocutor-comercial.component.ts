/*
 * @overview        {TipoInterlocutorComercialComponent}
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
import { GenericComponent } from '@app/module/essential/component/generic.component';
import { TipoInterlocutorComercialViewModel } from '../../model/tipo-interlocutor-comercial.model';

/**
 * TODO: Description of {@code TipoInterlocutorComercialComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-tipo-interlocutor-comercial',
    templateUrl: './tipo-interlocutor-comercial.component.html',
    standalone: false,
    styleUrls: ['./tipo-interlocutor-comercial.component.css']
})
export class TipoInterlocutorComercialComponent extends GenericComponent<TipoInterlocutorComercialViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: TipoInterlocutorComercialViewModel) {
        super(entityInstance);
    }

}
