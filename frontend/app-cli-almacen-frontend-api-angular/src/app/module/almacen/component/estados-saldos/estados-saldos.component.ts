/*
 * @overview        {EstadosSaldosComponent}
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
import { EstadosSaldosViewModel } from '../../model/estados-saldos.model';

/**
 * TODO: Description of {@code EstadosSaldosComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-estados-saldos',
    templateUrl: './estados-saldos.component.html',
    standalone: false,
    styleUrls: ['./estados-saldos.component.css']
})
export class EstadosSaldosComponent extends GenericComponent<EstadosSaldosViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: EstadosSaldosViewModel) {
        super(entityInstance);
    }

}
