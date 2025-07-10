/*
 * @overview        {CondicionesPagosComponent}
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
import { CondicionesPagosViewModel } from '../../model/condiciones-pagos.model';

/**
 * TODO: Description of {@code CondicionesPagosComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-condiciones-pagos',
    templateUrl: './condiciones-pagos.component.html',
    standalone: false,
    styleUrls: ['./condiciones-pagos.component.css']
})
export class CondicionesPagosComponent extends GenericComponent<CondicionesPagosViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: CondicionesPagosViewModel) {
        super(entityInstance);
    }

}
