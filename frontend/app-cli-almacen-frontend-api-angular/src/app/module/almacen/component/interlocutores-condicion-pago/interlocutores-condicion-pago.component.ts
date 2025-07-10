/*
 * @overview        {InterlocutoresCondicionPagoComponent}
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
import { InterlocutoresCondicionPagoViewModel } from '../../model/interlocutores-condicion-pago.model';

/**
 * TODO: Description of {@code InterlocutoresCondicionPagoComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-interlocutores-condicion-pago',
    templateUrl: './interlocutores-condicion-pago.component.html',
    standalone: false,
    styleUrls: ['./interlocutores-condicion-pago.component.css']
})
export class InterlocutoresCondicionPagoComponent extends GenericComponent<InterlocutoresCondicionPagoViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: InterlocutoresCondicionPagoViewModel) {
        super(entityInstance);
    }

}
