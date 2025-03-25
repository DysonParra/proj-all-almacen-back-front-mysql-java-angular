/*
 * @fileoverview    {InterlocutorFinanzasComponent}
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
import { InterlocutorFinanzasViewModel } from '../../model/interlocutor-finanzas.model';

/**
 * TODO: Description of {@code InterlocutorFinanzasComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-interlocutor-finanzas',
    templateUrl: './interlocutor-finanzas.component.html',
    standalone: false,
    styleUrls: ['./interlocutor-finanzas.component.css']
})
export class InterlocutorFinanzasComponent extends GenericComponent<InterlocutorFinanzasViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: InterlocutorFinanzasViewModel) {
        super(entityInstance);
    }

}
