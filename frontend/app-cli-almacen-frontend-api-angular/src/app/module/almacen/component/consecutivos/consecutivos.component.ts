/*
 * @overview        {ConsecutivosComponent}
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
import { ConsecutivosViewModel } from '../../model/consecutivos.model';

/**
 * TODO: Description of {@code ConsecutivosComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-consecutivos',
    templateUrl: './consecutivos.component.html',
    standalone: false,
    styleUrls: ['./consecutivos.component.css']
})
export class ConsecutivosComponent extends GenericComponent<ConsecutivosViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: ConsecutivosViewModel) {
        super(entityInstance);
    }

}
